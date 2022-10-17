class author{
    constructor(authorid,name,bookid,contactno,address){
        this.authorid=authorid;
        this.name= name;
        this.bookid = bookid;
        this.contactno=contactno;
        this.address=address;
    }
   
    
}




class bookdetails{
    constructor(bookid,bookname,authorid,publicationname,publisheddate){
        this.bookid=bookid;
        this.bookname = bookname;
        this.authorid= authorid;
        this.publicationname= publicationname;
        this.publisheddate= publisheddate;
    }

    showdetails(){
        console.log("Details Of the book");
        console.log("Book ID :"+this.bookid);
        console.log("Book Name :"+this.bookname);
        console.log("Author ID :"+this.authorid);
        console.log("Publication Name :"+this.publicationname);
        console.log("Published date :"+this.publisheddate);
        
        if(this.authorid == this.bookid ){
            console.log(showdetailsofauthor());
        }
    }

    showdetailsofauthor(){
        console.log("Details Of the author");
        console.log("Book ID :"+this.authorid);
        console.log("Book Name :"+this.name);
        console.log("Author ID :"+this.bookid);
        console.log("Publication Name :"+this.contactno);
        console.log("Published date :"+this.address);
        
        
    }
   
    
}

const b1= new bookdetails(101,"time",201,"AJ","28-05-2006");
const a1= new author(201,"Ram",101,123456,"Banglore");

b1.showdetails();

