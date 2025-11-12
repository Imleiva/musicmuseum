# Rock & Metal Museum

An immersive 3D virtual museum experience dedicated to rock and metal concerts. Walk through different themed rooms, explore concert posters, watch historical footage, and listen to legendary performances.

## Live Demo

**[Visit the Museum Live](https://imleiva.github.io/musicmuseum/)**

_Experience the 3D virtual museum directly in your browser!_

<!-- Last deployment attempt: 2025-10-25 - Mobile panels optimized -->

## Features

- **3D Immersive Experience** - Navigate through realistic virtual rooms with WebGL rendering
- **Collapsible Mobile Interface** - Smart panels that auto-collapse on mobile for better UX
- **Multi-Genre Themed Rooms** - Metal, Rock, and Punk dedicated spaces with custom lighting
- **Interactive Concert Posters** - Hover and click for detailed information and setlists
- **Video Projections** - Historical concert footage and museum credits display
- **Interactive Credits Button** - 3D animated button to toggle museum credits video
- **Avatar Customization** - Choose from legendary rock and metal artists as your guide
- **Multilingual Support** - Available in multiple languages
- **360° Navigation** - Full freedom to look around each room with smooth camera controls
- **Responsive Design** - Works on desktop and mobile devices
- **GitHub Pages Deployment** - Automatically deployed and always up-to-date

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd musicmuseum
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

[](http://localhost:5173)

## Controls & Interaction

- **Mouse Drag** - Rotate 360° view around the museum
- **Mouse Scroll** - Zoom in/out for closer inspection
- **Click Posters** - View detailed concert information and setlists
- **Red Credits Button** - Toggle museum credits video on/off
- **Avatar Selection** - Choose your rock/metal guide from the toolbar
- **Room Navigation** - Use top navigation bar to switch between themed rooms
- **Settings Panel** - Access language and customization options
- **Curiosities Mode** - Toggle fun facts and trivia display

## Tech Stack

- **React 18** - UI Framework
- **React Three Fiber** - 3D Rendering
- **@react-three/drei** - 3D Utilities
- **Vite** - Build Tool & Dev Server

## Project Structure

src/
├── components/
│ ├── 3d/ # 3D scene components
│ │ ├── VenueRoom.jsx
│ │ ├── RockPoster.jsx
│ │ └── Projector.jsx
│ └── ui/ # User interface components
│ ├── PosterModal.jsx
│ └── RockNavigator.jsx
├── data/ # Concert information
│ └── concerts.js
└── assets/ # Media resources
Customization

### Adding New Concerts

Edit `src/data/concerts.js` to add new concert information:

```javascript
{
  id: unique_id,
  band: "Band Name",
  venue: "Venue Name",
  date: "YYYY-MM-DD",
  genre: "metal|rock|punk",
  description: "Concert description",
  imageUrl: "/images/poster.jpg",
  position: [x, y, z]
}
```

### Room Themes

Each room supports different color schemes and atmospheres. Modify the theme in `VenueRoom.jsx` component.

## Deployment

### GitHub Pages (Production)

The app is automatically deployed to GitHub Pages at: **[https://imleiva.github.io/musicmuseum/](https://imleiva.github.io/musicmuseum/)**

- **Auto-deployment** on every push to `main` branch
- **Build process** via GitHub Actions
- **Asset optimization** for production

### Manual Deployment

1. **Build for production**

   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your web server

   The build process optimizes assets and configures paths for GitHub Pages deployment.

### Development vs Production

- **Development**: `npm run dev` - Local server at `http://localhost:5173`
- **Production**: Optimized build with dynamic asset paths for GitHub Pages

## 📱 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

WebGL 2.0 support required for optimal 3D performance.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

---

**Enjoy exploring the Leiva'n Roll Hall Of Fame!** 🤘

_Experience legendary concerts in an immersive 3D environment at [imleiva.github.io/musicmuseum](https://imleiva.github.io/musicmuseum/)_
