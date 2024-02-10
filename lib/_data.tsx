import { Icons } from "@/components/icons";

interface CategoryCommandProps {
  key: string;
  label: string;
  icon: React.ReactElement;
}

export const categoriesCommand: CategoryCommandProps[] = [
  {
    key: "trending",
    label: "Trending",
    icon: <Icons.sparkles className="size-4" />,
  },
  {
    key: "screens",
    label: "Screens",
    icon: <Icons.copy className="size-4" />,
  },
  {
    key: "ui-elements",
    label: "UI Elements",
    icon: <Icons.layoutGrid className="size-4" />,
  },
  {
    key: "flows",
    label: "Flows",
    icon: <Icons.arrowRightSquare className="size-4" />,
  },
];

export const categoriesList: string[] = [
  "Business",
  "Finance",
  "CRM",
  "Shopping",
  "Artificial Intelligence",
  "Education",
  "Food & Drink",
  "Health & Fitness",
  "Lifestyle",
  "Entertainment",
  "Travel & Transportation",
  "Communication",
  "Crypto & Web3",
  "Social Networking",
  "Medical",
];