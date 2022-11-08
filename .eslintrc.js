module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jasmine: true,
    jquery: true
  },
  rules: {
    'accessor-pairs': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'arrow-body-style': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', {
      before: true,
      after: true
    }],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    camelcase: ['error', {
      allow: [
        'key_learning_points',
        'close_with',
        'destroy_with',
        'refresh_token',
        'image_source',
        'business_impact',
        'challenge_id'
      ]
    }],
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],
    'comma-spacing': ['error', {
      before: false,
      after: true
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'self'],
    'consistent-return': 'error',
    'constructor-super': 'error',
    curly: ['error', 'all'],
    'default-case': 'error',
    'default-case-last': ['error'],
    'dot-location': ['error', 'property'],
    'dot-notation': ['off'],
    'eol-last': 'error',
    eqeqeq: ['error', 'smart'],
    'func-call-spacing': ['error', 'never'],
    'func-style': ['error', 'expression'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    'generator-star-spacing': ['error', {
      before: true,
      after: false
    }],
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    indent: ['error', 2, {SwitchCase: 1}],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'strict'
    }],
    'keyword-spacing': ['error', {
      before: true,
      after: true
    }],
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['error', 'always'],
    'multiline-ternary': 'off', // never didn't work as we have max line width which sometimes made the ternary statement be multiple lines.
    'new-cap': ['error', {
      newIsCap: true,
      capIsNew: false,
      properties: true
    }],
    'new-parens': 'error',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-await-in-loop': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': ['error', {
      allowLoop: false,
      allowSwitch: false
    }],
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-loss-of-precision': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxBOF: 0,
      maxEOF: 1
    }],
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-restricted-globals': ['error', 'event'],
    'no-return-assign': ['error', 'except-parens'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unreachable-loop': 'error',
    'no-unused-expressions': 'error',
    // 'no-use-before-define': ['error', 'nofunc'], - since this doesn't like function expressions, not worth it
    'no-useless-computed-key': ['error', {enforceForClassMembers: true}],
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['error', {
      consistent: true,
      minProperties: 2
    }],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
    'operator-linebreak': ['error', 'before'],
    'prefer-arrow-callback': 'error',
    'prefer-const': ['error', {destructuring: 'all'}],
    // prefer-destructuring - This might be a 'bit' frustrating to fix.
    /*'prefer-destructuring': ['error',
      {
        VariableDeclarator: {array: false, object: true},
        AssignmentExpression: {array: false, object: false}
      },
      {enforceForRenamedProperties: false}
    ],*/
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    radix: 'error',
    'require-atomic-updates': 'error',
    'require-await': 'error',
    'rest-spread-spacing': ['error', 'never'],
    semi: ['error', 'always'],
    'semi-spacing': ['error', {
      before: false,
      after: true
    }],
    'space-before-blocks': ['error', 'always'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false
    }],
    'switch-colon-spacing': 'error',
    'template-curly-spacing': ['error', 'always'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
    'wrap-regex': 'error',
    'yield-star-spacing': ['error', 'before']
  }
}
