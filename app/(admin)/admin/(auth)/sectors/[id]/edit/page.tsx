"use client";
import { useParams } from "next/navigation";
import SectorFormPage from "../../sector-form-page";

const EditSectorPage = () => {
  const params = useParams();
  const sectorId = params.id as string;

  return <SectorFormPage sectorId={sectorId} />;
};

export default EditSectorPage;
