
const Data = {
  projects: [
      {
          name: "feiyu",
          url: "http://feiyuexpress.com/",
          tags: "HTML, Bootstrap4, CSS, Python, Django",
          intro: "International logistics company's portal.",
          pic_url:"/images/logo/feiyu.png",
          pro_list: [
              "Order delivery services online", "Track package location", "Users address management",  "Excel data import and export","View sales data visualization"
          ],
          link: "feiyu",
          keywords: [
              "Python", "Django", "Bootstrap4", "Ajax"
          ],
          detail_intro: "The organization, Feiyu Express, is an international logistic company providing international package delivery services for their clients. They have delivered more than 12,000 packages and have more than 7,000 registered clients. As the number of users increased, they are recently expanding business into selling American domestic products. Our team are working on building their online store. ",
          detail_codes_intro: [
              "Use Python module XlsxWriter to write text, numbers, formulas and hyperlinks to multiple worksheets in an Excel 2007+ XLSX files.",
              "Format file, merge cells and Validate data.",
              "Write Python data got from database to cells based on its type. Typically, data would includes package items, items brand, numbers and quantity.",
              "Use Bootstrap4, HTML5, CSS to revamp style and layout for their shopping platform: http://www.feiyuexpress.com/eshop/.",
              "Use libraries to simplify and beautify frontend design. For example, using toastr to show message with info retrived from backend. Uploading and submitting files with DropZone.",
              "Request and receive data from backend API using Ajax and show error or success message."
          ],
          detail_code_pic: "/images/projects/feiyu_pic1.png",
          detail_pic: "/images/projects/feiyu.png"
      },
      {
          name: "ERP",
          url: "http://dev2.packagingchamps.com/",
          tags: "Django Form, jQuery, Bootstrap4",
          intro: "ERP system for warehouse management.",
          pic_url:"/images/logo/uslj.png",
          pro_list: [
              "invoice, PO management", "products management", "orders management", "customers management","Shopping website included"
          ],
          link: "erp",
          keywords: [
              "Django", "jQuery", "CSS", "Bootstrap4", "Data Visualization"
          ],
          detail_intro: "An ERP system for a 30,000 Sq. Ft. warehouse in LA. This system is used to manage day-to-day activities such as supply chain operation, inventory management, purchase order and invoice management and customer info management.",
          detail_codes_intro: ["Get JSON array and convert them into content in Select Option element, and also style them with select2 library.",
          "Format and post form data to the backend API and alert message with status info received from the server.",
          "Design purchase order pages and complete frontend functions. Example: let users preview order information before submitting the form. Update total price when the product quantity changes.  ",
          "Use Bootstrap4, HTML5, CSS to revamp style and layout for their shopping platform: http://dev2.packagingchamps.com/index/.",
          "Update shopping cart info with data getting from request session."
          ],
          detail_code_pic: "/images/projects/hanno_code.png",
          detail_pic: "/images/projects/hanno.png"
      },
      {
          name: "Quick Store",
          url: "http://www.quickstores.net/",
          tags: "Ajax, JSON, jQuery, JS",
          intro: "E-commerce Platform.",
          pic_url:"/images/logo/qcstore.png",
          pro_list: [
              "Users create account", "Set up online store ", "Products management", "orders management","Website theme selection"
          ],
          link: "quickstore",
          keywords: [
              "jQuery", "Django", "Bootstrap4", "HTML", "CSS", "JSON", "JS libraries"
          ],
          detail_intro: "Quick store is an e-commerce platform for online stores and retail point-of-sale systems. Users choose a template and upload information about their products and stores. System will generate a unique link for each store. Users have the access to manage their own stores and products.",
          detail_codes_intro: ["Establish a dictionary in a JSON file. Use the jQury to switch language after checkting language setting in request session.",
          "Use jQuery to read and post images data to the server and show previewed images.",
          "Use Bootstrap4, HTML5, CSS to revamp style and layout.",
          "Use libraries to simplify and beautify frontend design. For example, using toastr to show message with info retrived from backend and Sweetalert to show message."],
          detail_code_pic: "/images/projects/feiyu_pic1.png",
          detail_pic: "/images/projects/quick_store_intro.png"
      },
      {
          name: "Mage Air",
          url: "http://www.mageair.us/",
          tags: "HTML, CSS, React",
          intro: "E-commerce website & dashboard.",
          pic_url:"/images/logo/mage.png",
          pro_list: [
              "Online payment", "Galley", "Products management", "orders management"
          ],
          link: "mage",
          keywords: [
              "Python", "Django", "Bootstrap4", "Ajax"
          ],
          detail_intro: "Mage Air is a shopping website for an air conditioner distributor. It also comes with a dashboard for administators to manage their online products and orders. ",
          detail_codes_intro: [
              "Post data to backend API using Ajax. Receive message from server and interact with users by showing status messages.",
              "Establish a dictionary in a JSON file. Use the jQury to switch language after checkting language setting in request session.",
              "Design layout of products information form using Bootstrap4, jQuery and CSS. Get data and form from backend API(Django 2.2 Form) and customize the frontend layout to improve user experience.",
              "Use libraries to simplify and beautify frontend design. For example, using Toastr to show message with info retrived from backend and Sweetalert to show message."
          ],
          detail_code_pic: "/images/projects/mage_code.png",
          detail_pic: "/images/projects/mage.png"
      },
      {
          name: "Climax KTV",
          url: "http://dev2.climaxktv.com/",
          tags: "Django Form, jQuery, Bootstrap4, DOM",
          intro: "Online store for KTV equip retail.",
          pic_url:"/images/logo/climax.png",
          pro_list: [
              "Orders history", "Customer info management", "Track orders ", "Import customers info using xlxs files"
          ],
          link:"climax",
          keywords: [
              "React", "Bootstrap4", "JS libraries", "Django Paginator"
          ],
          detail_intro: "Climax is a shopping website for a KTV equipment distributor.",
          detail_codes_intro: [
              "Build page components using React.",
              "Use Django Paginator to manage paginated data that splits across several pages.",
              "Post data to backend API using Ajax. Receive message from server and interact with users by showing status messages.",
              "Design layout of products information form using Bootstrap4, jQuery and CSS. Get data and form from backend API(Django 2.2 Form) and customize the frontend layout to improve user experience.",
              "Use libraries to simplify and beautify frontend design. For example, using Toastr to show message with info retrived from backend and Sweetalert to show message. Using magnific popup to pop up large pictures and information."
          ],
          detail_code_pic: "/images/projects/climax_code.png",
          detail_pic: "/images/projects/climax_.png"
      },
      {
          name: "Cat Adoption",
          url: "#",
          tags: "Django RESTful API, React, Python",
          intro: "Non-profit cats adoption portal.",
          pic_url:"/images/logo/kittyhouse.png",
          pro_list: [
              "Upload stray cats info.",
              "Fill out adoption application form.",
              "Administators manage and update cats info.",
              "Make appointments for visit."
          ],
          link:"cat",
          keywords: [
              "React", "Django Rest Framework(DRF)", "Model Serializer"
          ],
          detail_intro: "Kitten House is a non profit project for cat adoption. People can upload info about stray cats and we will help to find adopters.",
          detail_codes_intro: [
              "Build page components using React.",
              "Build web API using Django RESTful API.",
              "Design frontend layout using Bootstrap4, jQuery and CSS to improve user experience.",
                  ],
          detail_code_pic: "/images/projects/cat_code.png",
          detail_pic: "/images/projects/cat_.png",
          github_url: "https://github.com/minimisgo/CatAdoption.git"
      }
  ],
  
}
export default Data;