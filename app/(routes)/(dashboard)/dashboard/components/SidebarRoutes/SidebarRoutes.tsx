"use client";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@clerk/nextjs";
import {
  dataAdminSidebar,
  dataGeneralSidebar,
  SidebarItemT,
} from "./SidebarRoutes.data";
import SidebarItem from "./SidebarItem/SidebarItem";
import { isAdministrator } from "@/lib/isAdministrator";

type SectionProps = {
  name: string;
  items: SidebarItemT[];
};

const Section = ({ name, items }: SectionProps) => {
  return (
    <div className="p-2 md:p-6">
      <p className="mb-2 text-slate-500">{name}</p>
      {items.map((item) => {
        return <SidebarItem key={item.label} item={{ ...item }} />;
      })}
    </div>
  );
};

export default function SidebarRoutes() {
  const { userId } = useAuth();

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Section name="GENERAL" items={dataGeneralSidebar} />
        <Separator />
        {isAdministrator(userId) && (
          <Section name="ADMIN" items={dataAdminSidebar} />
        )}
      </div>
    </div>
  );
}
