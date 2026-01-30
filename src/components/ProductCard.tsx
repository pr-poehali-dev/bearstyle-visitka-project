import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 glass-effect group">
      <div className="aspect-[4/3] overflow-hidden bg-secondary relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardHeader>
        <CardTitle className="text-2xl">{product.name}</CardTitle>
        <CardDescription className="text-base">{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="text-2xl font-bold premium-gradient bg-clip-text text-transparent">{product.price}</div>
          <ul className="space-y-2 text-sm">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-primary text-lg">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full h-12 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20" variant="default">
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;