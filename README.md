# مستندات مربوط به پروژه تست محمد صدیقی
# Documentation of Mohammad Sedighy's test project

### Project Structure
- Single page: main.ts in pages directory

### I will explain structure of my folders:

## api:
In this file I have one ts file that contains an axios api that get cryptocurrencies array:
```ts
const apiGetCrypto = async (): Promise<CryptoItem[]> => {
const res = await myAxios.get<Record<string, Omit<CryptoItem, 'key'>>>(
'currencyMapping'
);

return Object.entries(res.data).map(([key, val]) => ({
key,
...val,
}));
};
```
Then, for cashing this data, I used Tantack package that it used to cashing cryptocurrencies api for some times that you want to call it. So it will get api and cash it of more time usage.
```ts
export const useCrypto = () => {
    return useQuery<CryptoItem[], Error>({
        queryKey: ["cryptos"],
        queryFn: apiGetCrypto,
    });
};
```

## assets:

This folder contains several subfolders:
- Fonts: It contains one font as woff2 format for better styling. 
- Imgs: It contains some images that I imported from site and Figma.
- Styles: It contains some CSS files that I separated them based on its content. For example, in font.css I used font face that importing my font to project. In tailwind.css, I configured my tailwind properties and imported tailwind CSS. In vars.css, I added my CSS identifiers.
- Svgs: It contains my svg icons that I used in my project.

## components:

In this folder, I made some component that I used its code more than one time.

- CustomButton: This component Built for my buttons with my custom props and styles.
- Divider: A line that is in vertical mode, and it used for separating my parts based on Figma.
- Notif: This is my notif style that is in fixed position and used for my notif that I show in bottom right of my single page.
- SubTab: This is a tab that if it used in a div with flex position, we can see tabs styles.
- SupportFloatButton: It is my float action button that is in my bottom left of my single page.

## features

It has just one folder for one page that this folder has two parts.

#### describePart:

This folder contains right part of my Figma style that in this index.tsx file, I used components from its component directory, and I will describe them:

1. ChooseProductModal: This component contains my cryptocurrency items that I get from Tantack function, and it has search bar and tab bar that I created one tab component, and it used side by side.
2. CryptoCard: This is a component that show a cryptocurrency card.
3. Description: This component show the rightest part of my Figma file that contains an image.
4. DraggableInput: This part, handle importing image input in my SubmitOrderModal.tsx file.
5. Header: In this part you can see the search bar and topbar routing in it.
6. Routing: This component show the routes that I explained it in Header part.
7. SearchBar: This component show the search bar routes that I explained it in Header part.
8. SubItemMenu: This component contains title and value to describe input items in SubmitOrderModal.
9. SubmitOrder: This component contains the center part of my Figma file, and it contains change part and submit order button.
10. SubmitOrderModal: This component contains DraggableInput.tsx component, items that showing in SubItemMenu.tsx component and this component used to submit order.

#### orderPart:

This folder contains left part of my Figma style that in this index.tsx file, I used components from its component directory, and I will describe them:

1. OrderDetail: This component show detail of order and its steps.
2. Pricing: This component shows detail of pricing that is in Figma file.
3. Step: This component show steps of order details that used in OrderDetail.tsx component.
4. SubItemMenu: This component show items that placed in Pricing.tsx component.
5. UserButtonFunction: This component created for buttons that shows user information and it placed in top left of single page screen.

## lib

In this directory has just one file that its content is:
```ts
import {QueryClient} from "@tanstack/react-query";

export const queryClient = new QueryClient();
```
I do this for using Tantach package in all over the project. Because I set it global in src/main.tsx.

## models

In this directory, I designed models that used in whole of projects that I separated it in cryptoItem.ts and order.ts files.

## pages

As I said, we have just one page that it contains one file named: main.tsx

## utils

In this directory, I have just one ts file for config my project. in this file:
```ts
import axios from "axios";

export const baseURL = import.meta.env.VITE_BASE_URL

export const myAxios = axios.create({
    baseURL: baseURL || 'http://localhost:3000/',
    headers: {
        "Content-Type": "application/json",
    },
});
```
, I configured my axios package and base url that imported from .env file.

You can see my git repository project in [github link](https://github.com/mamadsdg/MohammadSedighyReactTest#). 

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

