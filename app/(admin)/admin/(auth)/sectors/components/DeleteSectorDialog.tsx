import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/components/ui/alert-dialog";
import { Button } from "@/app/components/ui/button";
import { Loader2Icon, Trash2Icon } from "lucide-react";
import { useState } from "react";

interface DeleteSectorDialogProps {
  sectorId: string;
  onDelete: () => void;
}

export default function DeleteSectorDialog({ sectorId, onDelete }: DeleteSectorDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const deleteSector = async () => {
    try {
      setIsLoading(true);
      await fetch(`/api/admin/sector?id=${sectorId}`, {
        method: "DELETE",
      });
      setIsOpen(false);
      onDelete();
    } catch (error) {
      console.error("Error deleting sector:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-red-500 hover:bg-red-500/10">
          <Trash2Icon className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-semibold">Delete Sector</AlertDialogTitle>
          <AlertDialogDescription className="pt-2 text-gray-500">
            Are you sure you want to delete this sector? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4 gap-2">
          <Button variant="outline" onClick={() => setIsOpen(false)} className="hover:bg-gray-100">
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={() => deleteSector()}
            className="bg-red-600 hover:bg-red-700"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2Icon className="h-4 w-4 animate-spin mr-2" />
            ) : (
              <Trash2Icon className="h-4 w-4 mr-2" />
            )}
            {isLoading ? "Deleting..." : "Delete Sector"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
