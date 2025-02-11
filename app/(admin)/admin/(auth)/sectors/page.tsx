"use client";
import { Card, CardContent } from "@/app/components/ui/card";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { useSectorStore } from "@/app/store/useSectorStore";
import { PencilIcon } from "lucide-react";
import Image from "next/image";
type Application = {
  id: number;
  title: string;
  description: string;
  finishes: Finish[];
};

type Finish = {
  id: number;
  title: string;
  image_url: string;
};

type Sectors = {
  _id: string;
  title: string;
  description: string;
  image: string;
  applications: Application[];
  icon: string;
  bannerImage: string;
};

const SectorsPage = () => {
  const [sectors, setSectors] = useState<Sectors[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { clearApplications } = useSectorStore();
  const router = useRouter();
  useEffect(() => {
    const fetchSectors = async () => {
      try {
        const response = await fetch("/api/admin/sector");
        const data = await response.json();
        setSectors(data.data);
      } catch (error) {
        console.error("Error fetching sectors:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSectors();
  }, []);

  const handleClickNewSector = () => {
    clearApplications();
    router.push("/admin/sectors/create");
  };

  const handleEditSector = (sectorId: string) => {
    router.push(`/admin/sectors/${sectorId}/edit`);
  };

  if (isLoading) {
    return (
      <div className="p-6 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading sectors...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Sectors</h1>
        <Button className="bg-primary text-white" onClick={handleClickNewSector}>
          <span className="mr-2">+</span>
          Add Sector
        </Button>
      </div>

      {sectors.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No sectors found</h3>
          <p className="text-gray-500 mb-4">Get started by creating your first sector</p>
          <Button className="bg-primary text-white" onClick={handleClickNewSector}>
            <span className="mr-2">+</span>
            Add Sector
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="aspect-video relative">
                <Image src={sector.image} alt={sector.title} className="object-cover w-full h-full" fill />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold">{sector.title}</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-500 hover:text-primary hover:bg-primary/10"
                    onClick={() => handleEditSector(sector._id)}
                  >
                    <PencilIcon className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-gray-600 line-clamp-3">{sector.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectorsPage;
