import { Card } from "@/components/ui/card"
import { Check, Truck, Clock, Users } from "lucide-react"

const features = [
  {
    icon: Check,
    title: "Bahan Berkualitas",
    description: "Menggunakan bahan-bahan segar pilihan dari supplier terpercaya",
  },
  {
    icon: Truck,
    title: "Pengiriman Tepat Waktu",
    description: "Garansi pengiriman tepat waktu ke lokasi acara Anda",
  },
  {
    icon: Clock,
    title: "Pelayanan Cepat",
    description: "Pesan hari ini, bisa diantar besok dengan persiapan maksimal",
  },
  {
    icon: Users,
    title: "Tim Profesional",
    description: "Staf berpengalaman siap membantu kesuksesan acara Anda",
  },
]

export default function Features() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Mengapa Memilih Kami?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-6 bg-card border-border hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
