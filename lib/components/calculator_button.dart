import 'package:flutter/material.dart';

class CalculatorButton extends StatelessWidget {
  final String character;
  final void Function() onPressed;
  const CalculatorButton(this.character, this.onPressed, {Key? key})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: double.infinity,
      padding: const EdgeInsets.all(1),
      child: ElevatedButton(
        onPressed: onPressed,
        style: ElevatedButton.styleFrom(primary: Colors.grey[100]),
        child: Text(
          character,
          style: const TextStyle(
              color: Colors.black, fontSize: 30, fontWeight: FontWeight.w500),
        ),
      ),
    );
  }
}
