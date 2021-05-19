class Form {
    constructor() {
      
      this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h3');


    }
  
    display(){
      var title = createElement('h2')
          title.html("Car Racing Game");
          title.position(450,0);
      
       
      
         this.input.position(500, 160);
      this.button.position(620,190);
  
       this.button.mousePressed(()=>{
      this.input.hide();
        this.button.hide();
  
        var name = input.value();
        player.name= name;
        
        playerCount+=1;
        player.index= playerCount;
        player.update()
        player.updateCount(playerCount);
        
     this.greeting.html("Hello " + name )
     this.greeting.position(130,160)

      });
     
    }

     hide(){
              this.greeting.hide(); this.button.hide(); this.input.hide();
      }

  }