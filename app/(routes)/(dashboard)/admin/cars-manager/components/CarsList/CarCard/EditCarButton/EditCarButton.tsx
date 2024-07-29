"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { useState } from "react";
import React from "react";
import { EditCarButtonProps } from "./EditCarButton.types";
import EditCarForm from "../EditCarForm/EditCarForm";
import { DialogTitle } from "@radix-ui/react-dialog";

function EditCarButton(props: EditCarButtonProps) {
  const [openDialog, setOpenDialog] = useState(false);

  const { data } = props;
  return (
    <Dialog open={openDialog}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={() => {
            setOpenDialog(true);
          }}
        >
          Edit
          <Pencil className="h-4 w-4 ml-2" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3 text-lg font-bold">Edit</DialogTitle>
          <DialogDescription>
            <EditCarForm setOpenDialog={setOpenDialog} data={data} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default EditCarButton;
