export const ANCHOR_WORDS =  {
    Temperature: 'testing the prompt',
    Quantity: 'String One Prompt',
    Float: 'Float One Prompt',
    ErrorMesage: {
        Invalid_Characters: 'wrong -14, invalid characters'
    }
}

export const GET_DIGITS = {
    Only144: 'Only accepts 144',
    RangeNumber: 'Enter a number between 100-199 inclusive',
    TwoDigitsNumber: 'Enter a number with a length of 1-2 digits',
    Only144Off: 'Only accepts 144 and confirm is OFF',
    RangeNumberOff: 'Enter a number between 100-199 inclusive and confirm is OFF',
    TwoDigitsNumberOff: 'Enter a number with a length of 1-2 digits and confirm is OFF',
    ScanOnly144: 'Scan: Only accepts 144 scanning is on scanned input not validated',
    ScanRangeNumber: 'Scan a number between 100-199 inclusive scanning is on scanned input not validated',
    ScanTwoDigitsNumber: 'Scan a number with a length of 1-2 digits scanning is on scanned input not validated',
}

export const ADD_TEST = [
    '(Var1) 10 + (Var2) 15  Verify 25 = 25',
    '(Var1) 10 + (Var2) 015  Verify 25 = 25',
    '(Var1) 10 + (Var2) 00000000000000015  Verify 25 = 25',
    '(Var1) 10 + (Var2) 0  Verify 10 = 10',
    '(Var1) 10.0 + (Var2) 15.0  Verify 25.0 = 25.0',
    '(Var1) 10 + (Var2) 15.356  Verify 25.356 = 25.356',
    '(Var1) 3.95 + (Var2) 5.25  Verify 9.20 = 9.20',
    '(Var1) 0.01 + (Var2) 1  Verify 1.01 = 1.01',
    '(Var1) 10 + (Var2) abc  Verify 10 = 10',
    '(Var1) 10 + (Var2) 15abc  Verify 25 = 25',
    '(Var1) 10 + (Var2) abc15abc  Verify 10 = 10',
    '(Var1) 10 + (Var2) abc15  Verify 10 = 10',
    '(Var1) 10 + (Var2) 15abc20  Verify 25 = 25',
    '(Var1) 10 + (Var2) 5  Verify 15 = 15',
    '(Var1) -10 + (Var2) -10  Verify -20 = -20',
    '(Var1) -10.51 + (Var2) 15  Verify 4.49 = 4.49',
    '100 + -50  Verify 50 = 50',
    '3.56 + 2.240  Verify 5.800 = 5.800',
    '2000 + -15  Verify 1985 = 1985',
    '(x) undefined + (y) undefined  Verify 0 = 0'
]

export const SUBSTRACTION_TEST = [
    '(Var1) 10 - (Var2) 15  Verify -5 = -5',
    '(Var1) 10 - (Var2) 015  Verify -5 = -5',
    '(Var1) 10 - (Var2) 00000000000000015  Verify -5 = -5',
    '(Var1) 10 - (Var2) 0  Verify 10 = 10',
    '(Var1) 10.0 - (Var2) 15.0  Verify -5.0 = -5.0',
    '(Var1) 10 - (Var2) 15.356  Verify -5.356 = -5.356',
    '(Var1) 3.95 - (Var2) 5.25  Verify -1.30 = -1.30',
    '(Var1) 0.01 - (Var2) 1  Verify -0.99 = -0.99',
    '(Var1) 10 - (Var2) abc  Verify 10 = 10',
    '(Var1) 10 - (Var2) 15abc  Verify -5 = -5',
    '(Var1) 10 - (Var2) abc15abc  Verify 10 = 10',
    '(Var1) 10 - (Var2) abc15  Verify 10 = 10',
    '(Var1) 10 - (Var2) 15abc20  Verify -5 = -5',
    '(Var1) 10 - (Var2) 5  Verify 5 = 5',
    '(Var1) -10 - (Var2) -10  Verify 0 = 0',
    '(Var1) -10.51 - (Var2) 15  Verify -25.51 = -25.51',
    '100 - -50  Verify 150 = 150',
    '3.56 - 2.240  Verify 1.320 = 1.320',
    '2000 - -15  Verify 2015 = 2015',
    '(x) undefined - (y) undefined  Verify 0 = 0'
]

export const MULTIPLY_TEST = [
    '(Var1) 10 * (Var2) 15  Verify 150 = 150',
    '(Var1) 10 * (Var2) 015  Verify 150 = 150',
    '(Var1) 10 * (Var2) 00000000000000015  Verify 150 = 150',
    '(Var1) 10 * (Var2) 0  Verify 0 = 0',
    '(Var1) 10.0 * (Var2) 15.0  Verify 150.00 = 150.00',
    '(Var1) 10 * (Var2) 15.356  Verify 153.560 = 153.560',
    '(Var1) 3.95 * (Var2) 5.25  Verify 20.7375 = 20.7375',
    '(Var1) 0.01 * (Var2) 1  Verify 0.01 = 0.01',
    '(Var1) 10 * (Var2) abc  Verify 0 = 0',
    '(Var1) 10 * (Var2) 15abc  Verify 150 = 150',
    '(Var1) 10 * (Var2) abc15abc  Verify 0 = 0',
    '(Var1) 10 * (Var2) abc15  Verify 0 = 0',
    '(Var1) 10 * (Var2) 15abc20  Verify 150 = 150',
    '(Var1) 10 * (Var2) 5  Verify 50 = 50',
    '(Var1) -10 * (Var2) -10  Verify 100 = 100',
    '(Var1) -10.51 * (Var2) 15  Verify -157.65 = -157.65',
    '100 * -50  Verify -5000 = -5000',
    '3.56 * 2.240  Verify 7.97440 = 7.97440',
    '2000 * -15  Verify -30000 = -30000',
    '(x) undefined * (y) undefined  Verify 0 = 0'
]

export const DIVISION_TEST = [
    '(Var1) 10 / (Var2) 15  Verify 0.6666666666666666666666666667 = 0.6666666666666666666666666667',
    '(Var1) 10 / (Var2) 015  Verify 0.6666666666666666666666666667 = 0.6666666666666666666666666667',
    '(Var1) 10 / (Var2) 00000000000000015  Verify 0.6666666666666666666666666667 = 0.6666666666666666666666666667',
    '(Var1) 10 / (Var2) 0  Verify 0 = 0',
    '(Var1) 10.0 / (Var2) 15.0  Verify 0.6666666666666666666666666667 = 0.6666666666666666666666666667',
    '(Var1) 10 / (Var2) 15.356  Verify 0.6512112529304506381870278718 = 0.6512112529304506381870278718',
    '(Var1) 3.95 / (Var2) 5.25  Verify 0.7523809523809523809523809524 = 0.7523809523809523809523809524',
    '(Var1) 0.01 / (Var2) 1  Verify 0.01 = 0.01',
    '(Var1) 10 / (Var2) abc  Verify 0 = 0',
    '(Var1) 10 / (Var2) 15abc  Verify 0.6666666666666666666666666667 = 0.6666666666666666666666666667',
    '(Var1) 10 / (Var2) abc15abc  Verify 0 = 0',
    '(Var1) 10 / (Var2) abc15  Verify 0 = 0',
    '(Var1) 10 / (Var2) 15abc20  Verify 0.6666666666666666666666666667 = 0.6666666666666666666666666667',
    '(Var1) 10 / (Var2) 5  Verify 2 = 2',
    '(Var1) -10 / (Var2) -10  Verify 1 = 1',
    '(Var1) -10.51 / (Var2) 15  Verify -0.7006666666666666666666666667 = -0.7006666666666666666666666667',
    '100 / -50  Verify -2 = -2',
    '3.56 / 2.240  Verify 1.589285714285714285714285714 = 1.5892857142857142857142857143',
    '2000 / -15  Verify -133.3333333333333333333333333 = -133.33333333333333333333333333',
    '(x) undefined / (y) undefined  Verify 0 = 0'
]

export const DECREMENT_TEST = [
    'Set to 4 after increment expect 5 was 5',
    'Set to 4abc after increment expect 5 was 5',
    'Set to abc4def after increment expect 1 was 1',
    'Set to -4 after increment expect -3 was -3',
    'Set to 4.5 after increment expect 5.5 was 5.5',
    'Set to 4 after decrement expect 3 was 3',
    'Set to 4abc after decrement expect 3 was 3',
    'Set to abc4def after decrement expect -1 was -1',
    'Set to -4 after decrement expect -5 was -5',
    'Set to 4.5 after decrement expect 3.5 was 3.5',
]

export const CONCATENATION_TEST = [
    'concat [Pick] and [5] result = Pick 5',
    'concat [(String1)=This is a message] and [6] result = This is a message 6',
    'concat [6] and [(String1)=This is a message] result = 6 This is a message',
    'concat [(String1)=This is a message] and [(String2)=Of the emergency broadcasting system] result = This is a message Of the emergency broadcasting system',
    'concat [This] and [That] result = This That',
    'concat [(SaveVar1)=Pick 5] and [(SaveVar2)=This is a message 6] result = Pick 5 This is a message 6',
]

export const ASSIGNMENT_STRINGS = [
    'assign num #time - Enter formula [=INT((NOW() - DATEVALUE("2009-1-1 00:00:00")) * 86400)] in excel - should be close to 444835441',
    'assign num #date - Enter formula [=INT((NOW() - DATEVALUE(\"1900-1-1\")))-1] in excel - should equal 45008',
    'assign num abc123def should equal 0 result = 0',
    'assign num 123.4def should equal 123.4 result = 123.4',
    'assign num 123def.4 should equal 123 result = 123',
    'assign num 789 should equal 789 result = 789',
    'assign num 789.0 should equal 789.0 result = 789.0',
    'assign num Var1 456 - then Var2 to Var1 - Var2 should equal 456 result = 456',
    'assign str #time should equal #time result = #time',
    'assign str #date should equal #date result =  #date',
    'assign str abc123def should equal abc123def result = abc123def',
    'assign str 123.4def should equal 123.4def result = 123.4def',
    'assign str 123def.4 should equal 123def.4 result = 123def.4',
    'assign str 789 should equal 789 result = 789',
    'assign str 789.0 should equal 789.0 result = 789.0',
    'assign str Var1 456Test - then Var2 to Var1 - Var2 should equal 456Test result = 456Test',
    'assign str Var1 456Test - then assign num Var2 to Var1 - Var2 should equal 456 result = 456'
]

export const GOTO_TEST = [
    'This test is to check additional command go to. At following prompts a new additional command should be avilable to take you back to specified prompt. Say ready to begin',
    'First prompt'
]

export const DEFINED_TEST = 'Test to see that commands only show up if defined. Say ready to begin'

export const HOST_TEST = 'This test is to check additional command confirmation mappings. At next prompt select or speak command 1 through 30 and ensure prompt matches command number spoken and odd number commands are confirmed. Say ready to begin'

export const MAPPING_TEST = 'This test is to check additional command confirmation mappings. At next prompt select or speak command 1 through 30 and ensure prompt matches command number spoken and odd number commands are confirmed. Say ready to begin'

export const ASK_TEST = {
    YES: 'Cancel is available in overflow select YES',
    YES_NOT_AVAILABLE: 'Cancel is not available in overflow select YES',
    NO: 'Cancel is not available in overflow select NO',
    CANCEL: 'Prompt for Response - Cancel Allowed say or select cancel',
    CANCER_NO: 'Prompt for Response - Cancel Not Valid and not available in overflow select NO',
    ERROR: 'Error Code 220.  Host data record for variable name Ask20 was not found.  Instruction number 90 can not be executed.  To continue say ready',
    SPOKEN_YES: 'Select YES if this prompt is spoken'
}

export const VCOMMANDS = {
    GET_WORK: 'Get work',
    ORDER: 'Order 001, 3 items',
    AISLE: 'Aisle 1',
    ERROR_1: 'Index was outside the bounds of the array.',
    ERROR_2: 'Input string was not in a correct format.' ,
    ERROR_3: 'Missing localization message'
}
