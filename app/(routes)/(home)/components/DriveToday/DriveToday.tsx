import Reveal from "@/components/shared/Reveal/Reveal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function DriveToday() {
  return (
    <div className="p-6 lg:my-32 max-w-7xl mx-auto">
      <div className="bg-wallpaper bg-center bg-no-repeat bg-cover rounded-xl p-6 lg:p-32 relative">
        <div className="lg:flex gap-x-6">
          <div>
            <h3 className="text-4xl text-white">Drive your dream car Today</h3>
            <p className="text-white text-xl my-5">
              Register and explore the world of premium cars
            </p>
            <Link href="/sign-in">
              <Button variant="outline" size="lg">
                Register here
              </Button>
            </Link>
          </div>

          <Reveal position="right" className="lg:absolute lg:-right-32 top-5">
            <Image
              src="/images/audi.png"
              alt="Car Drive"
              width={650}
              height={350}
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default DriveToday;
