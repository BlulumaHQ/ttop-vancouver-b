import schoolPdfAsset from "@/assets/ttop-school-meal-program-chinese.pdf.asset.json";

// The school program PDF is 14+ MB and hosted through the platform asset CDN
// during preview. For a production Cloudflare Pages deployment, replace this
// import with the physical file at /public/downloads/ttop-school-meal-program-chinese.pdf.
export const schoolBrochureUrl = schoolPdfAsset.url;

export const montessoriSections = [
  {
    title: "Balanced Meal Planning",
    body:
      "Owner-supplied program materials describe monthly menu planning that balances protein, seasonal vegetables, and carbohydrates.",
  },
  {
    title: "Independence First",
    body:
      "Portions and food sizes are planned with young children in mind, supporting independent eating and growing confidence at the table.",
  },
  {
    title: "Calm Delivery",
    body:
      "The delivery and meal placement process is designed to minimize disruption to classroom concentration and morning work periods.",
  },
  {
    title: "Sensory Exploration",
    body:
      "Rotating menus introduce children to different textures, aromas, colours, and flavours as part of a positive early relationship with food.",
  },
];

export const montessoriGoals = [
  "Support positive early food experiences",
  "Encourage independent eating",
  "Offer varied textures, flavours, and aromas",
  "Maintain a calm and organized meal environment",
  "Reduce meal-service workload for educators",
];

export const hotLunchSections = [
  {
    title: "Classroom-Ready Delivery",
    body: "Meals are grouped by class to make school distribution more organized.",
  },
  {
    title: "Clear Meal Labels",
    body:
      "Program materials describe labels that identify the class, student, and selected meal.",
    note:
      "Student information must be managed according to the school’s approved ordering process. Do not collect student names through this public website.",
  },
  {
    title: "Insulated Transport",
    body: "Meals are transported in insulated bags designed to support organized delivery.",
  },
  {
    title: "Coordinated Timing",
    body: "Delivery planning is structured around the school lunch schedule.",
  },
  {
    title: "Simplified Cleanup",
    body:
      "Owner materials describe environmentally conscious paper meal packaging intended to make distribution and cleanup easier.",
  },
  {
    title: "Menu Variety",
    body:
      "The rotating meal approach is designed to expose students to a range of colours, textures, flavours, and familiar Taiwanese-inspired meals.",
  },
];
