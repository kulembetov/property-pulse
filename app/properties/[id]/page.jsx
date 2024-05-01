"use client";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";
import Link from "next/link";

const PropertyPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const pathname = usePathname();
  return (
    <div>
      <h1 className="text-3xl">Property Page</h1>
      <button onClick={() => router.push("/")}>
        Page ID: <span className="font-medium">{id}</span>
      </button>
      <p onClick={() => router.push("/")}>
        Query name: <span className="font-medium">{name}</span>
      </p>
      <p onClick={() => router.push("/")}>
        Pathname: <span className="font-medium">{pathname}</span>
      </p>
    </div>
  );
};

export default PropertyPage;
