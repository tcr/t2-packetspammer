// std::vector<std::string> strVec;

#include <nan.h>
#include <vector>

using namespace v8;

extern "C"
int
program_main(int argc, char *argv[]);

NAN_METHOD(Method) {
  NanScope();

  std::vector<char *> strVec;

  for (int i = 0; i < args.Length(); i++) {
  	char* arg = *NanUtf8String(args[i]->ToString());
  	char* c = new char[strlen(arg) + 1];
  	strcpy(c, arg);
  	strVec.push_back(c);
  }
  strVec.push_back(NULL);

  NanReturnValue(NanNew<Number>(program_main(args.Length(), &strVec[0])));
}

void Init(Handle<Object> exports) {
  exports->Set(NanNew("hello"), NanNew<FunctionTemplate>(Method)->GetFunction());
}

NODE_MODULE(hello, Init)
