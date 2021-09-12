var finish = () => {
	var answers=0;
	var question1=document.quiz.choice1.value;
	var question2=document.quiz.choice2.value;
	var question3=document.quiz.choice3.value;
	var question4=document.quiz.choice4.value;
	var question5=document.quiz.choice5.value;
	var question6=document.quiz.choice6.value;
	var question7=document.quiz.choice7.value;
	var question8=document.quiz.choice8.value;
	var question9=document.quiz.choice9.value;
	var question10=document.quiz.choice10.value;

	if (question1==="C")
	{
		answers++;
	}

	if (question2==="B")
	{
		answers++;
	}

	if (question3==="C")
	{
		answers++;
	}

	if (question4==="D")
	{
		answers++;
	}

	if (question5==="C")
	{
		answers++;
	}

	if (question6==="C")
	{
		answers++;
	}

	if (question7==="A")
	{
		answers++;
	}

	if (question8==="B")
	{
		answers++;
	}

	if (question9==="D")
	{
		answers++;
	}

	if (question10==="D")
	{
		answers++;
	}
	document.write("finla score: "+answers);
 }