context {
    input endpoint: string;
    input name: string;
}

start node root {
    do {
        #connectSafe($endpoint);
        #waitForSpeech(1000);
        #sayText("Hello " + $name);
        #sayText("Welcome to eclectica metaverse!");
        #sayText("My name is kate, i can help you to learn about metis and blockchain. What you want to know?");
        wait *;
    }
}

digression nft
{
    conditions {on #messageHasIntent("nft");}
    do 
    {
      #say("nft_i");
      wait *;
    }
}

digression Metis
{
    conditions {on #messageHasIntent("metis");}
    do 
    {
       #say("metis_i");
       wait *;
    }
}

digression Metis1
{
    conditions {on #messageHasIntent("metis1");}
    do 
    {
       #say("metis1_i");
       wait *;
    }
}

digression Metis2
{
    conditions {on #messageHasIntent("metis2");}
    do 
    {
       #say("metis2_i");
       wait *;
    }
}

digression Metis4
{
    conditions {on #messageHasIntent("metis4");}
    do 
    {
       #say("metis4_i");
       wait *;
    }
}

digression Defi
{
    conditions {on #messageHasIntent("defi");}
    do 
    {
       #say("defi_i");
       wait *;
    }
}

digression Dao
{
    conditions {on #messageHasIntent("dao");}
    do 
    {
       #say("dao_i");
       wait *;
    }
}



digression Layertwo
{
    conditions {on #messageHasIntent("l2");}
    do 
    {
       #say("l2_i");
       wait *;
    }
}