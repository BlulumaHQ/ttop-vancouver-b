import { createFileRoute, Outlet } from "@tanstack/react-router";
import { business } from "@/data/business";

export const Route = createFileRoute("/school-programs")({
  head: () => ({
    meta: [
      { title: "School Meal Programs | TTOP Chicken" },
      { name: "description", content: "Organized Taiwanese meal programs for Montessori centres, daycares, and elementary school hot lunches across Greater Vancouver." },
      { property: "og:title", content: "School Meal Programs | TTOP Chicken" },
      { property: "og:url", content: business.canonicalOrigin + "/school-programs" },
    ],
  }),
  component: () => <Outlet />,
});
