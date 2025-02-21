import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DivideIcon as LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: typeof LucideIcon;
  title: string;
  description: string;
  iconClassName?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  iconClassName,
}: FeatureCardProps) {
  return (
    <Card className="flex flex-col items-center text-center transition-all hover:shadow-lg">
      <CardHeader>
        <Icon className={`mx-auto w-12 h-12 ${iconClassName} mb-2`} />
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
