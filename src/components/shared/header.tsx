import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Notebook, User } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <div className="flex items-center gap-4">
          {/* Это лого */}
          <Link href={"/"}>
            <Notebook className="w-8 h-8 text-primary" />
          </Link>
          <div>
            <h1 className="text-2xl uppercase font-black">New-North</h1>
            <p className="text-sm text-gray-400 leading-3">Blog</p>
          </div>
        </div>
        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="outline" className="flex items-center gap-3">
              <User size={16} />
              Войти
            </Button>
          </Link>
        </div>
      </Container>
    </header>
  );
};
