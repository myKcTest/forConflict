var copyFromPath ="C:\\A\\";
var copyToPath = "C:\\B\\";



function Runner()
{
	
	var fileCount = 3;
	var files = [2,3,4];
	
	function fileCounter()
	{
		for(var i = 0; i<fileCount; i++)
			{
			
				myCopyFile(copyFromPath,copyToPath,i);
				
			}
		
		
	}	
	
	function Q(height)
	{
		return this.height;
		
	}
	
	function myCopyFile(From, To, x)
	{
		console.log('File with name '+ files[x] + ' is copyed ' + From + 'to the ' + To);
	}
	

	
	return fileCounter();
}

Runner();








/*

	function E (num) {
		return 10 * num;	
	}
	
	const W = (num) => {return 10*num;}
	
	//return console.log(W(10));
	
	*/