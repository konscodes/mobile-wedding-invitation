# 💌 Mobile Wedding Invitation 💌
This project is a mobile wedding invitation.<br />
It is developed based on React and Typescript, and uses Vite to provide a fast and easy development environment.

![demo1.gif](demo1.gif)

- eslint and prettier are used for styling
- react-photoswipe-gallery is used for gallery
- react-naver-maps is used for the maps
- js-confetti is used to add cute confetti

![demo2.gif](demo2.gif)


## How to install and run the project

1. Clone the repository.
```
git clone https://github.com/your-username/mobile-wedding-invitation.git
```
2. Navigate to the project folder.
```
cd mobile-wedding-invitation
```
3. Install the required dependencies.
```
npm install
```
4. (Required) Rename the `.env.sample` file to `.env` and fill in VITE_APP_NAVERMAPS_CLIENT_ID with the `client_id` issued by Naver Cloud. You can get the `client_id` after registering the application on [Naver Cloud Platform](https://console.ncloud.com/naver-service/application).
5. (Optional) If you want to use likes and guestbook features, you need to set up Firebase. Set up Firebase SDK in src/firebase.ts file. You can set up the SDK by referring to the [Firebase](https://firebase.google.com/docs/web/setup?hl=ko) documentation.
6. Modify the files that require customization (see the checklist below).
7. Run your application.
```
npm run dev
```


## Custom checklist

- [ ] `src/data.json` Modify the information in the wedding invitation.
- [ ] `index.html` Modify the meta tags for the favicon, title, etc.
- [ ] `public/thumbnail.jpg` Modifies the thumbnail photo.
- [ ] `src/layout/Gallery/PhotoGallery.tsx` Modify the photo size to fit the photos you want to use.
- [ ] `.env` VITE_APP_NAVERMAPS_CLIENT_ID=client_id is required.
- [ ] (Optional) `src/firebase.ts` likes, guestbook requires firebase sdk setup if you are using guestbook.
- [ ] (optional) `src/data.json` You can add a link to KakaoPay or Toss by using `kakaopayAccount`, `tossAccount` items when creating a joint account number.


## References

- Developer: [heejin-hwang](https://github.com/heejin-hwang)
- react-photoswipe-gallery library: [react-photoswipe-gallery](https://www.npmjs.com/package/react-photoswipe-gallery)
- react-naver-maps official documentation: [react-naver-maps](https://zeakd.github.io/react-naver-maps/)
- Naver Cloud Platform: [Naver Cloud Platform](https://console.ncloud.com/naver-service/application)
- Kakao Developers: https://developers.kakao.com/
- Create a TOS ID: https://toss.me/

This project is distributed under the MIT license. For more information, see the LICENSE file.
