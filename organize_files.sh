#!/bin/bash

# Create necessary directories
mkdir -p src/{routes,components/{ui,site},lib,hooks,assets,utils}

# Move route files to src/routes
mv "__root.tsx" "src/routes/__root.tsx" 2>/dev/null || true
mv "index (1).tsx" "src/routes/index.tsx" 2>/dev/null || true
mv "product.\$slug.tsx" "src/routes/product.\$slug.tsx" 2>/dev/null || true
mv "shop.\$room.tsx" "src/routes/shop.\$room.tsx" 2>/dev/null || true

# Move component files
mv "ProductCard.tsx" "src/components/site/ProductCard.tsx" 2>/dev/null || true
mv "SiteHeader.tsx" "src/components/site/SiteHeader.tsx" 2>/dev/null || true
mv "SiteHeader (1).tsx" "src/components/site/SiteHeader.2.tsx" 2>/dev/null || true
mv "SiteFooter.tsx" "src/components/site/SiteFooter.tsx" 2>/dev/null || true

# Move UI components - all the numbered ones
for file in accordion alert alert-dialog aspect-ratio avatar badge breadcrumb button calendar card carousel chart checkbox collapsible command context-menu dialog drawer dropdown-menu form hover-card input input-otp label menubar navigation-menu pagination popover progress radio-group resizable scroll-area select separator sheet sidebar skeleton slider sonner switch table tabs textarea toggle toggle-group tooltip; do
  # Try both variations
  f1="${file} (1).tsx"
  f2="${file} (2).tsx"
  f3="${file}.tsx"
  
  [ -f "$f1" ] && mv "$f1" "src/components/ui/${file}.tsx" 2>/dev/null || true
  [ -f "$f2" ] && mv "$f2" "src/components/ui/${file}.2.tsx" 2>/dev/null || true
  [ -f "$f3" ] && mv "$f3" "src/components/ui/${file}.tsx" 2>/dev/null || true
done

# Move hook files
for file in use-mobile; do
  f1="${file} (2).tsx"
  f2="${file} (3).tsx"
  f3="${file} (4).tsx"
  
  [ -f "$f1" ] && mv "$f1" "src/hooks/${file}.tsx" 2>/dev/null || true
  [ -f "$f2" ] && rm "$f2" 2>/dev/null || true
  [ -f "$f3" ] && rm "$f3" 2>/dev/null || true
done

# Move lib/util files
mv "products (1).ts" "src/lib/products.ts" 2>/dev/null || true
mv "lovable-error-reporting (1).ts" "src/lib/lovable-error-reporting.ts" 2>/dev/null || true
mv "utils (2).ts" "src/utils/index.ts" 2>/dev/null || true
mv "utils (3).ts" "src/utils/cn.ts" 2>/dev/null || true

# Move server and config files
mv "server (1).ts" "src/server.ts" 2>/dev/null || true
mv "start (1).ts" "src/start.ts" 2>/dev/null || true
mv "router (1).tsx" "src/router.tsx" 2>/dev/null || true
mv "routeTree.gen (1).ts" "src/routeTree.gen.ts" 2>/dev/null || true
mv "vite.config (1).ts" "vite.config.ts" 2>/dev/null || true
mv "tsconfig (1).json" "tsconfig.json" 2>/dev/null || true
mv "eslint.config (1).js" "eslint.config.js" 2>/dev/null || true

# Move error/component files
mv "error-capture (1).ts" "src/lib/error-capture.ts" 2>/dev/null || true
mv "error-page (1).ts" "src/components/error-page.ts" 2>/dev/null || true

# Move components.json if it exists
mv "components (1).json" "components.json" 2>/dev/null || true

# Remove duplicate config files
rm -f "project (1).json" 2>/dev/null

echo "Project reorganization complete"
