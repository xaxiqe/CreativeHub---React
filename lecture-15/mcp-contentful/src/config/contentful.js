import * as contentfulDeliveryClient from "contentful";
import * as contentfulManagementClient from "contentful-management";

export const deliveryClient = contentfulDeliveryClient.createClient({
  accessToken: import.meta.env.VITE_DELIVERY_ACCESS_TOKEN,
  space: import.meta.env.VITE_SPACE_ID,
});

export const managementClient = contentfulManagementClient.createClient(
  {
    accessToken: import.meta.env.VITE_CMA_TOKEN,
  },
  {
    type: "plain",
    defaults: {
      spaceId: import.meta.env.VITE_SPACE_ID,
      environmentId: import.meta.env.VITE_ENVIRONMENT_ID,
    },
  },
);
