export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-8 text-center text-sm text-muted-foreground">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Portfolio Pro. All rights reserved.
      </div>
    </footer>
  );
}
