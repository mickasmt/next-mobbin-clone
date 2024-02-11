import Image from "next/image";

export const ScreensContent = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-col gap-y-3 w-full">
      <div className="grid gap-3 rounded-2xl p-4 bg-foreground/5 dark:bg-foreground/10 grid-cols-3 w-full">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="overflow-hidden rounded-lg h-auto max-h-56 w-full">
            <Image
              className="h-full w-full object-cover"
              src="/images/phone-screen.webp"
              alt="Phone Screen App"
              width={400}
              height={863}
              priority
            />
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground font-normal w-full">
        <b>{name}</b> - Screens display the user’s profile information and/or
        account settings.
      </p>
    </div>
  );
};

export const WebContent = ({ name }: { name: string }) => {
  return (
    <div className="space-y-3">
      <div className="rounded-2xl p-4 bg-foreground/5 dark:bg-foreground/10 w-full">
        <div className="overflow-hidden rounded-lg max-h-56 h-auto w-full">
          <Image
            className="h-auto w-full object-cover"
            src="/images/desktop-screen.webp"
            alt="Phone Screen App"
            width={1256}
            height={863}
          />
        </div>
      </div>

      <p className="text-sm text-muted-foreground font-normal">
        <b>{name}</b> - Screens display the user’s profile information and/or
        account settings.
      </p>
    </div>
  );
};