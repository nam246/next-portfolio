import Link from "next/link";
import { ArrowRight, Download,  Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

// ✏️ Chỉnh thông tin của bạn tại đây
const CTA = {
  title: "Cùng làm việc nhé?",
  description:
    "Tôi đang tìm kiếm cơ hội mới và luôn sẵn sàng trao đổi về dự án, hợp tác freelance hay đơn giản là một buổi cà phê online.",
  email: "your.email@example.com",
  cvUrl: "/cv.pdf", // đặt file CV vào thư mục /public
  socials: [
    { label: "GitHub", href: "https://github.com/your-username", icon: "" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/your-username",
      icon: '',
    },
    { label: "Email", href: "mailto:your.email@example.com", icon: Mail },
  ],
};

export function CtaSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="relative overflow-hidden rounded-2xl border bg-muted/40 px-6 py-12 text-center md:px-12 md:py-16">
          {/* Họa tiết nền nhẹ */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {CTA.title}
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground md:text-lg">
              {CTA.description}
            </p>
          </div>

          {/* Nút hành động chính */}
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={`mailto:${CTA.email}`}>
                Liên hệ với tôi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <a href={CTA.cvUrl} download>
                <Download className="mr-2 h-4 w-4" />
                Tải CV
              </a>
            </Button>
          </div>

          {/* Mạng xã hội */}
          <div className="relative mt-8 flex items-center justify-center gap-2">
            {CTA.socials.map(({ label, href, icon: Icon }) => (
              <Button
                key={label}
                asChild
                variant="ghost"
                size="icon"
                aria-label={label}
              >
                {/* <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-5 w-5" />
                </a> */}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}