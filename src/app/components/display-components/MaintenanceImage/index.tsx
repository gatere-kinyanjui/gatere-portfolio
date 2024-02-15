import Image from "next/image";
import underMaintenance from "../../../../../public/under-maintenance.jpg";

const MaintenanceImage = () => {
  return (
    <Image
      alt="under maintenance"
      src={underMaintenance}
      placeholder="blur"
      quality={100}
      //   fill
      sizes="100vw"
      //   style={{
      //     objectFit: "cover",
      //   }}
    />
  );
};

export default MaintenanceImage;
