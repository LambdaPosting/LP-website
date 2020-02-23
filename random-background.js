function backgr()
{
	var backimg = ["bg-01.jpg","bg-02.jpg","bg-03.jpg","bg-04.jpg","bg-05.jpg","bg-06.jpg","bg-07.jpg","bg-08.jpg"];
	var randimg =Math.floor(Math.random()*8);
	document.body.background = backimg[randimg];
}