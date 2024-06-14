"use client";
import { usePathname, useRouter } from "next/navigation";

const NavigationTestPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  return <div>NavigationTestPage</div>;
};
export default NavigationTestPage;
