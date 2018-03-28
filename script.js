var main = function() {

    function changeColour(td){   
        var toggle = td.style;
        toggle.backgroundColor = toggle.backgroundColor? "":"#333";
        toggle.color = toggle.color? "":"#fff";
    };


    function diagonal(diagArr, idsArr) {
        var count = 0;
        diagArr.forEach(function(element) {
            if (idsArr.includes(element)) {
                count++;
            } else if ((idsArr.includes(element)) && (diagArr.includes(this.id))) {
                count--;
            }
        });
        console.log("Count:", count);// If clicked td  
        return(count)
    }


        var idArr = [];
        colArr = [0,0,0,0];
        rowArr = [0,0,0,0];
    $('td').click(function(){        
        var $this = $(this);
        var col   = $this.index();
        var row   = $this.closest('tr').index();        
        diag1 = ['cell1','cell6','cell11','cell16'];
        diag2 = ['cell4','cell7','cell10','cell13']

        // Change background style of td's
        changeColour(this);
        
        // Check horizontal and vertical bingo condition
        if (idArr.includes(this.id)) {
            index = idArr.indexOf(this.id);
            idArr.splice(index, 1);
            colArr[col]--;
            rowArr[row]--;
        } else {
            idArr.push(this.id);
            colArr[col]++;
            rowArr[row]++;
        }
        // Check diagonal bingo condition
        var diagFunc1 = diagonal(diag1, idArr);
        var diagFunc2 = diagonal(diag2, idArr);
        
        console.log(diagFunc1)
        
        bingoCondition = ((colArr.includes(4)) || (rowArr.includes(4))|| (diagFunc1 === 4) || (diagFunc2 === 4))
        if (bingoCondition) {
            alert('Bingo')
        }
    });
}
    
$(document).ready(main);

