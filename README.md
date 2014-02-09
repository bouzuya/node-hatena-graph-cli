Hatena::Graph command line interface
==============================================================================

[Hatena::Graph](http://graph.hatena.ne.jp/) command line interface (unofficial).


Installation
------------------------------------------------------------------------------

    $ npm install -g hatena-graph-cli

Usage
------------------------------------------------------------------------------

    $ # show usage
    $ hatena-graph --help
    $
    $ # configure
    $ export HATENA_USERNAME='your username'
    $ export HATENA_APIKEY='your apikey'
    $
    $ # get graph data
    $ hatena-graph get-data graphname
    2014-01-01 12.34
    2014-01-02 56.78
    $
    $ # post graph data
    $ hatena-graph post-data graphname value 90.12 -d 2014-01-03
    2014-01-03 90.12
    $
    $ # get graph config
    $ hatena-graph get-config graphname
    allowgrouplist bouzuya
    allowuser bouzuya
    comment hoge
    formula null
    graphcolor 000000
    graphtype lines
    maxy 100.00
    miny 50.00
    nolabel 1
    reverse 1
    showdata 1
    stack 1
    status private
    userline 75.00
    userlinecolor CE2418
    $
    $ # post graph config
    $ hatena-graph post-config graphname comment message
    comment message
    
Configuration
------------------------------------------------------------------------------

authentication data priority

1. command-line arguments
2. authentication data file (~/.hatena-graph.json)
3. environment variables

### command-line arguments

    $ hatena-graph \
    > --username 'your username' \
    > --apikey 'your apikey' \
    > get-data graphname
    2014-01-01 12.34
    2014-01-02 56.78

### file

    $ # create authentication data file
    $ username='your username'
    $ apikey='your apikey'
    $ hatena-graph create-authfile --username $username --apikey $apikey
    create authentication data file : /home/user/.hatena-graph.json
    $
    $ hatena-graph get-data graphname
    2014-01-01 12.34
    2014-01-02 56.78
    $
    $ # delete authentication data file
    $ hatena-graph delete-authfile
    delete authentication data file : /home/user/.hatena-graph.json

### environment variables

    $ export HATENA_USERNAME='your username'
    $ export HATENA_APIKEY='your apikey'
    $
    $ hatena-graph get-data graphname
    2014-01-01 12.34
    2014-01-02 56.78

