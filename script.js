var names=new Array();
names[0]="Sarah";
names[1]="Jammie";
names[2]="Paul";
names[3]="Mina";
names[4]="Suresh";
names[5]="Charles";
names[6]="Vikey";
names[7]="Tamako";
names[8]="Justin";
names[9]="Sam";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}