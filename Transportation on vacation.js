function rentalCarCost(d) {
    // Your solution here
    if(d==1 || d==2)
      {
        return 40*d;
      }
    else if(d<7 && d>=3)
      {
        return 40*d-20;
      }
    else(d>=7)
    {
      return 40*d-50;
    }
  }