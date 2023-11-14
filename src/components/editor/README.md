
<pre>
jbl@pokus2:~/envoy-opa-compose$ export MACHIN='VGhpcyBpcyB0byBkaXNwbGF5IHRoZSAKYCQkYyA9IFxwbVxzcXJ0e2FeMiArIGJeMn0kJGAKIGluIG9uZSBsaW5lCgpgYGBLYVRlWApjID0gXHBtXHNxcnR7YV4yICsgYl4yfQpgYGAK'

echo ${MACHIN} | base64 -d > ./my.utf8.text.file
jbl@pokus2:~/envoy-opa-compose$ cat ./my.utf8.text.file
This is to display the
`$$c = \pm\sqrt{a^2 + b^2}$$`
 in one line

```KaTeX
c = \pm\sqrt{a^2 + b^2}
```

</pre>