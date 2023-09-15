"""
    this function takes a string and at first it will take the indexes from where there is a dot, exclamaiton mark, ##'s. 
    It will first check if "##" exist in the string, if not then return None. Then if there is no ".", a new_word will be the 
    slice from the "##"s to the end. If not then there's multiple checks. If the period if before the "##", then we will remove that 
    section from the word and create a new one. If there's empty spaces after, we will also remove them. We also take new indexes for all
    of the dots, exclamation marks and ##'s. If the exclamtion mark the before the period. we slice differenly based on 
    what's first. After all that, we return the new word test them with the unit tests. 
"""
def double_hash(s):
   
    dot = s.find(".")
    exclaim = s.find("!")
    start = s.find("##") + 2
    new_word = ""

    if s.find("##") == -1:
        return None
    else:
        if s.find(".") == -1:
            new_word = s[start : ]
            return new_word
        elif s.find("##") > s.find("."):
            new_word = s[s.find(".") + 1: ]
            while new_word[0] == " ":
                new_word = new_word[1:]
            new_start = new_word.find("##") + 2
            new_exclaim = new_word.find("!")
            new_dot = new_word.find(".")
            if new_exclaim < new_dot:
                new_word = new_word[new_start : new_exclaim]
            else:
                new_word = new_word[new_start: ]
            return new_word
        else:
            new_word = s[start : dot]
            return new_word
    
 
import unittest

"""
All 3 unit tests
"""
class BasicTest(unittest.TestCase):
    def test1(self):
        self.assertEqual(double_hash("xx ##spring. xx"), "spring")
        self.assertEqual(double_hash("xx ##summer"), "summer")
        self.assertEqual(double_hash("x#. ##l@@k!."), "l@@k")
        self.assertEqual(double_hash("xx ##."), "")
        self.assertEqual(double_hash("xx #none. xx"), None)
        self.assertEqual(double_hash("abc"), None)
    
    def test2(self):
        self.assertEqual(double_hash("november"), None)
        self.assertEqual(double_hash("##iwu."), "iwu")
        self.assertEqual(double_hash(". xx##education!."), "education")
        self.assertEqual(double_hash("126x. 098"), None)
        self.assertEqual(double_hash("*&^@* .sd ##hello."), "hello")
        self.assertEqual(double_hash("# . cs256"), None)
    
    def test3(self):
        self.assertEqual(double_hash("this is a really long ##message"), "message")
        self.assertEqual(double_hash("xx.    ##this is a trick one!."), "this is a trick one")
        self.assertEqual(double_hash("xx unit xx testing  @@. is xx very ##important."), "important")

if __name__ == '__main__':
    unittest.main()
    