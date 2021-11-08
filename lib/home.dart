import 'package:flutter/material.dart';
import 'package:glovikulator/components/calculator_button.dart';
import 'package:math_expressions/math_expressions.dart';

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  String text = '0';
  String expression = '';

  void buttonPressed(String text, [String? expression]) {
    String newText;
    String newExpression;

    // Jika expression itu null maka..
    expression ??= text;

    if (this.expression == '') {
      newText = '';
      newExpression = '';
    } else {
      newText = this.text;
      newExpression = this.expression;
    }

    if (text == 'C' || text == '<x' || text == '=') {
      if (text == 'C') {
        newText = '';
        newExpression = '';
      } else if (text == '<x') {
        newText = '';
        newExpression = '';
        for (int i = 0; i < this.text.length - 1; i++) {
          newText += this.text[i];
          newExpression += this.expression[i];
        }
      } else if (text == '=') {
        Parser parser = Parser();
        Expression expression = parser.parse(newExpression);
        String result =
            expression.evaluate(EvaluationType.REAL, ContextModel()).toString();

        if (result[result.length - 1] == '0' &&
            result[result.length - 2] == '.') {
          newText = result.split('.')[0];
          newExpression = result.split('.')[0];
        } else {
          newText = result;
          newExpression = result;
        }
      }
    } else {
      newText += text;
      newExpression += expression;
    }

    setState(() {
      if (newExpression.isEmpty) {
        this.text = '0';
        this.expression = '';
      } else {
        this.text = newText;
        this.expression = newExpression;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    double screenWidth = MediaQuery.of(context).size.width;

    return Scaffold(
      appBar: AppBar(
        title: const Text('GLOVIKULATOR'),
      ),
      body: Container(
        width: screenWidth,
        alignment: Alignment.center,
        color: Colors.blue[200],
        child: Container(
          width: (screenWidth > 400) ? 400 : screenWidth,
          padding: const EdgeInsets.all(2),
          color: Colors.blue,
          child: Column(
            children: [
              Expanded(
                flex: 4,
                child: Container(
                  color: Colors.grey[50],
                  width: double.infinity,
                  alignment: const AlignmentDirectional(0.9, 0.9),
                  child: SelectableText(
                    text,
                    style: const TextStyle(
                      fontSize: 50,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
              ),
              Expanded(
                flex: 6,
                child: Container(
                  padding: const EdgeInsets.only(top: 2, bottom: 1),
                  child: Column(
                    children: [
                      Expanded(
                        child: Row(
                          children: [
                            Expanded(
                              child: CalculatorButton(
                                '(',
                                () => buttonPressed('('),
                              ),
                            ),
                            Expanded(
                              child: CalculatorButton(
                                ')',
                                () => buttonPressed(')'),
                              ),
                            ),
                            Expanded(
                              child: CalculatorButton(
                                '<x',
                                () => buttonPressed('<x'),
                              ),
                            ),
                            Expanded(
                              child: CalculatorButton(
                                'C',
                                () => buttonPressed('C'),
                              ),
                            ),
                          ],
                        ),
                      ),
                      Expanded(
                        child: Row(
                          children: [
                            Expanded(
                              child: CalculatorButton(
                                '7',
                                () => buttonPressed('7'),
                              ),
                            ),
                            Expanded(
                              child: CalculatorButton(
                                '8',
                                () => buttonPressed('8'),
                              ),
                            ),
                            Expanded(
                              child: CalculatorButton(
                                '9',
                                () => buttonPressed('9'),
                              ),
                            ),
                            Expanded(
                              child: CalculatorButton(
                                '÷',
                                () => buttonPressed('÷', '/'),
                              ),
                            ),
                          ],
                        ),
                      ),
                      Expanded(
                        child: Row(
                          children: [
                            Expanded(
                              child: CalculatorButton(
                                '4',
                                () => buttonPressed('4'),
                              ),
                            ),
                            Expanded(
                              child: CalculatorButton(
                                '5',
                                () => buttonPressed('5'),
                              ),
                            ),
                            Expanded(
                              child: CalculatorButton(
                                '6',
                                () => buttonPressed('6'),
                              ),
                            ),
                            Expanded(
                              child: CalculatorButton(
                                '×',
                                () => buttonPressed('×', '*'),
                              ),
                            ),
                          ],
                        ),
                      ),
                      Expanded(
                        child: Row(
                          children: [
                            Expanded(
                              child: CalculatorButton(
                                '1',
                                () => buttonPressed('1'),
                              ),
                            ),
                            Expanded(
                              child: CalculatorButton(
                                '2',
                                () => buttonPressed('2'),
                              ),
                            ),
                            Expanded(
                              child: CalculatorButton(
                                '3',
                                () => buttonPressed('3'),
                              ),
                            ),
                            Expanded(
                              child: CalculatorButton(
                                '-',
                                () => buttonPressed('-'),
                              ),
                            ),
                          ],
                        ),
                      ),
                      Expanded(
                        child: Row(
                          children: [
                            Expanded(
                              child: CalculatorButton(
                                '.',
                                () => buttonPressed('.'),
                              ),
                            ),
                            Expanded(
                              child: CalculatorButton(
                                '0',
                                () => buttonPressed('0'),
                              ),
                            ),
                            Expanded(
                              child: CalculatorButton(
                                '=',
                                () => buttonPressed('='),
                              ),
                            ),
                            Expanded(
                              child: CalculatorButton(
                                '+',
                                () => buttonPressed('+'),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
