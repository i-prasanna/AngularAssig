import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'assig-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {
  products : any[]= [];
  viewMode = 'list';
  sortMethods: string[] = ['high to low','low to high'];
  value: string = '';
  constructor(){}
  ngOnInit(){
  this.products=[
    {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/PKWM0029_400x.png?v=1663842753",
    title:"GREEN LEAF PRINTED COTTON SHIRT FOR MEN",
    price:"30.00",
    description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  },
  {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/PKWM0014_3_400x.jpg?v=1663842758",
  title:"FLOWERS PRINTED BREATHABLE COTTON SHIRT",
  price:"50.99",
  description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  },
  {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/WM0045_400x.png?v=1663842760",
  title:"FADED GREEN COLOR PLAIN COTTON MEN SHIRT",
  price:"32.99",
  description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  },
  {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/WM0035_400x.png?v=1663842729",
  title:"MAROON RAYON COTTON MEN SHIRT",
  price:"25.99",
  description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  },
  {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/PKWM0023_400x.jpg?v=1664365578",
  title:"SOLID WHITE PLAIN RAYON COTTON MEN SHIRT",
  price:"39.99",
  description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  },
  {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/WM0040_400x.png?v=1664365585",
  title:"SKY BLUE RAYON COTTON MEN SHIRT",
  price:"79.99",
  description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  },
  {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/WM0038_400x.png?v=1663842782",
  title:"BLACK COLOR PLAIN COTTON MEN SHIRT",
  price:"22.99",
  description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  },
  {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/WM0044_400x.png?v=1664365564",
  title:"TAN SKIN COLOR PLAIN COTTON MEN SHIRT",
  price:"39.99",
  description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  },
  {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/PKWM0017_2_400x.jpg?v=1663842766",
  title:"DELIGHTFUL FLORAL PRINT COTTON SHIRT",
  price:"40.99",
  description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  },
  {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/WM0034_400x.png?v=1663842701",
  title:"PEACH COLOR PLAIN COTTON MEN SHIRT",
  price:"25.99",
  description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  },
  {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/PKWM0029_400x.png?v=1663842753",
  title:"GREEN LEAF PRINTED COTTON SHIRT FOR MEN",
  price:"30.00",
  description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  },
  {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/PKWM0014_3_400x.jpg?v=1663842758",
  title:"FLOWERS PRINTED BREATHABLE COTTON SHIRT",
  price:"50.99",
  description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  },
  {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/WM0045_400x.png?v=1663842760",
  title:"FADED GREEN COLOR PLAIN COTTON MEN SHIRT",
  price:"32.99",
  description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  },
  {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/WM0035_400x.png?v=1663842729",
  title:"MAROON RAYON COTTON MEN SHIRT",
  price:"25.99",
  description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  },
  {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/PKWM0023_400x.jpg?v=1664365578",
  title:"SOLID WHITE PLAIN RAYON COTTON MEN SHIRT",
  price:"39.99",
  description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  },
  {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/WM0040_400x.png?v=1664365585",
  title:"SKY BLUE RAYON COTTON MEN SHIRT",
  price:"79.99",
  description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  },
  {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/WM0038_400x.png?v=1663842782",
  title:"BLACK COLOR PLAIN COTTON MEN SHIRT",
  price:"22.99",
  description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  },
  {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/WM0044_400x.png?v=1664365564",
  title:"TAN SKIN COLOR PLAIN COTTON MEN SHIRT",
  price:"39.99",
  description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  },
  {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/PKWM0017_2_400x.jpg?v=1663842766",
  title:"DELIGHTFUL FLORAL PRINT COTTON SHIRT",
  price:"40.99",
  description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  },
  {image:"https://cdn.shopify.com/s/files/1/0665/9627/4432/products/WM0034_400x.png?v=1663842701",
  title:"PEACH COLOR PLAIN COTTON MEN SHIRT",
  price:"25.99",
  description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
  }];

  }

  sort(event: any) {
    switch (event.target.value as String) {
      case "low to high":
        {
          this.products = this.products.sort((low, high) => low.price - high.price);
          break;
        }

      case "high to low":
        {
          this.products = this.products.sort((low, high) => high.price - low.price);
          break;
        }

      default: {
        return this.products;
        break;
      }

    }
    return this.products;

  }
}
