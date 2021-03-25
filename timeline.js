
function func(id) {

    const idd = '#' + id;

    id = parseInt(id);
    let start = 0;

    if( id>8 ){

         start = (id - id%10);
         

    }

    if (id < 8) {
        for (let i = 1; i < 8; i++) {

            if (i != id) {
                let iddd = '#' + i;
                if ($(iddd).hasClass("onclick-blue")) {
                    $(iddd).removeClass("onclick-blue");
                }
            }
        }

        for( let i = 1; i<8; i++ ){
            for( let j = i*10 + 1; j<i*10+6 ; j++ ){

                let clasd = '.stop-' + j + '-pseudo-wrapper';
                $(clasd).css( "visibility" , "hidden" );

            }
        }
    }
    else{

        for (let i = start+1; i < start+6; i++) {

            if (i != id) {
                let iddd = '#' + i;
                let clas = '.stop-' + i + '-pseudo-wrapper'; 
                $(clas).css( "visibility" , "hidden" );
                if ($(iddd).hasClass("onclick-blue")) {
                    $(iddd).removeClass("onclick-blue");
                }
            }
        }


    }



    $(idd).addClass("onclick-blue");
    
    if (id < 8) {

        let heightoffiller = 0;

        for (let i = 1; i < id; i++) {
            heightoffiller += 123;
        }
        $(".filler").css("height", heightoffiller + "px");

    }

    else {
        let widthoffiller = 0;
        for (let i = start+1; i <= id; i++) {
            widthoffiller += 198;
        }
         
        let clas = '.filler-' + (id-id%10)/10;
        let clasd = '.stop-' + id + '-pseudo-wrapper';
        $(clas).css( "width", widthoffiller + "px");
        console.log(clasd);
        $(clasd).css( "visibility" , "visible" );
    }
    if (id < 8) {
        let clas = '.' + 'stop-' + id + '-wrapper';
        for (let i = 1; i < 8; i++) {

            if (i != id) {
                let iddd = '#wrap-' + i;
                $(iddd).css("visibility", "hidden");
            }
        }
        $(clas).css("visibility", "visible");

    }
    return true;
}