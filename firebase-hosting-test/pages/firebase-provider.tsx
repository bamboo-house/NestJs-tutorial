import { FirestoreProvider, useFirebaseApp } from "reactfire";
import { getFirestore } from "firebase/firestore";

export default function FirebaseSDKProviders({ children }: any) {
  const app = useFirebaseApp();
  const firestore = getFirestore(app);
  return <FirestoreProvider sdk={firestore}>{children}</FirestoreProvider>;
}
