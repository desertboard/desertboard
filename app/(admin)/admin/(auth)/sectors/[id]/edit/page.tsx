"use client";

import SectorFormPage from "../../create/page";
import { useParams } from "next/navigation";

const EditSectorPage = () => {
  const params = useParams();
  const sectorId = params.id as string;

  return <SectorFormPage sectorId={sectorId} />;
};

export default EditSectorPage;
