package com.stackroute.basics;
import java.util.*;

public class StringFinder {


    public static void main(String[] args) {
        String searchString=getInput();
        String firstString=getInput();
        String secondString=getInput();
        int result=findString( searchString,  firstString,  secondString);
        displayResult(result);
    }

    public String getInput() {
    	public  static Scanner sc=new Scanner(System.in);
    	String str=sc.next();
        return null;
    }

    public void displayResult(int result) {
        System.out.println(result);
    }

    public int findString(String searchString, String firstString, String secondString) 
    {
    	if(searchString=="" || firstString=="" || firstString=="")
        return -1;
    	
    	if((firstString+firstString)==searchString)
    		return 1;
    	
    	return 0;
    }

    public void closeScanner() {
    	sc.close();
    }
}
