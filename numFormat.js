function numFormat (num, dsep, tsep, ndec) {
    /*
    * num - number to format
    * dsep - decimal separator
    * tsep - thousands separator
    * ndec - number of decimals
    * Example: numFormat(12034.96, ".", ",", 2);
    *******************************************/

    let initial_value = num;
    let sign = "";
    let integer_part, decimal_part, separator;

    //if num is not a number throw an error
    if ( typeof(num) != "number") {
        throw Error (num + " is not a number!");
    }

    //if decimal separator is not provided use '.' 
    if (!dsep) {
        dsep = ".";
    }

    //if decimal separator is anything else than '.' or ',' - throw an error
    if (!dsep in ['.', ',']) {
        throw Error ("Decimal separator can be '.' or ','.");
    }

    //if thousands separator is not provided use ','
    if (!tsep) {
        tsep = ",";
    }

    //if thousands separator is anything else than 
    //'.', ',', ' ', '*', '_' - throw an error
    if (!tsep in ['.', ',', ' ', '*', '_']) {
        throw Error ("The value of thousands separator can be equal to '.', ',', ' ', '*', '_'");
    }

    //if number of decimals is not provided use -1, 
    //-1 option preserves the initial number of decimals
    if (!ndec) {
        ndec = -1;
    }

    //if decimal separator is the same as thousands separator throw an error
    if (dsep == tsep) {
        throw Error("Decimal and thousands separators can not be the same.");
    }

    //Number sign
    if (num < 0) {
        sign = "-";
        num = Math.abs(num);
    }

    //Convert number to string with required number of decimals
    if (ndec==-1) {
        numstr = String(num);
        console.log(numstr);
    }
    else {
        numstr = num.toFixed(ndec);
    }

    //Split number into parts:
    let re = /(^\d+)([\.,])(\d+$)/;
    d = re.exec( numstr );
    if (d) {
        integer_part = d[1];
        //separator = d[2];
        decimal_part = d[3];
    }
    else {
        //represent integer with no decimal part
        integer_part = numstr;
        dsep = "";
        decimal_part = "";
    }

    //Integer part with thousands separator applied
    let integer_components = [];
    let l = integer_part.length; 
    let cnt = 0;
    for (let i=l-1; i>-1; i--) {
        cnt = (cnt+1)%3
        integer_components.unshift( integer_part[i] );
        if (cnt==0 && i!=0) {
            integer_components.unshift(tsep);
        }
    }

    integer_part = integer_components.join("");

    //Formatted Number 
    formatted_number = [sign, integer_part, dsep, decimal_part].join("");

    /* Number Structure: For testing purposes */
    /*
    let structure = {
        number: initial_value,
        sign: sign,
        decimal_part: decimal_part,
        integer_part: integer_part,
        number_of_decimals: ndec,
        decimal_separator: dsep,
        thousands_separator: tsep,
        formatted_number: formatted_number
    }*/

    return formatted_number;
}
