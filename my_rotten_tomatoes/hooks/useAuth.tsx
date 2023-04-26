import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
  } from 'firebase/auth';
  import { useRouter } from 'next/router';
  import { createContext, useContext, useEffect, useMemo, useState } from 'react';
  import { auth } from '../firebase';
  // import Landing from '@/pages/Landing';
  
  interface IAuth {
    user: User | null;
    signUp: (email: string, password: string) => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    error: string | null;
    loading: boolean;
  }
  
  const AuthContext = createContext<IAuth>({
    user: null,
    signIn: async () => {},
    signUp: async () => {},
    logout: async () => {},
    error: null,
    loading: false,
  });
  
  interface AuthProviderProps {
    children: React.ReactNode;
  }
  
  export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState(null);
    const [initialLoading, setInitialLoading] = useState(true);
    const router = useRouter();
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // Logged in...
          setUser(user);
          setLoading(false);
        } else {
          // Not logged in...
          setUser(null);
          setLoading(false);
          if (router.pathname !== '/login' && router.pathname !== '/') {
            router.push('/');
          }
        }
        setInitialLoading(false);
      });
    }, [auth, router]);
  
    const signUp = async (email: string, password: string) => {
      setLoading(true);
  
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setUser(userCredential.user);
          router.push('/');
          setLoading(false);
        })
        .catch((error) => alert(error.message))
        .finally(() => setLoading(false));
    };
  
    const signIn = async (email: string, password: string) => {
      setLoading(true);
  
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setUser(userCredential.user);
          router.push('/');
          setLoading(false);
        })
        .catch((error) => console.log(error.message))
        .finally(() => setLoading(false));
    };
  
    const logout = async () => {
      setLoading(true);
      signOut(auth)
        .then(() => {
          setUser(null);
        })
        .catch((error) => alert(error.message))
        .finally(() => setLoading(false));
    };
  
    const memoedValue = useMemo(
      () => ({
        user,
        signUp,
        signIn,
        loading,
        logout,
        error,
      }),
      [user, loading]
    );
  
    if (initialLoading) {
      return null;
    }
  
    // if (!user && router.pathname !== '/login') {
    //   return <Landing netflixOriginal={[]} trendingNow={[]} topRated={[]} actionMovies={[]} comedyMovies={[]} horrorMovies={[]} romanceMovies={[]} documentaries={[]}/> ;
    // }
  
    return (
      <AuthContext.Provider value={memoedValue}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default function useAuth() {
    return useContext(AuthContext);
  }
  