fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## Android

### android test

```sh
[bundle exec] fastlane android test
```

Runs all the tests

### android build

```sh
[bundle exec] fastlane android build
```

Build

### android deliver_to_app_distribution

```sh
[bundle exec] fastlane android deliver_to_app_distribution
```

Deliver to app distribution

### android increment_version_and_commit

```sh
[bundle exec] fastlane android increment_version_and_commit
```



### android build_and_deliver

```sh
[bundle exec] fastlane android build_and_deliver
```

Deliver Release to Firebase App Distribution

### android prod_build_and_deliver

```sh
[bundle exec] fastlane android prod_build_and_deliver
```

Deliver PROD Release to Firebase App Distribution

### android stag_build_and_deliver

```sh
[bundle exec] fastlane android stag_build_and_deliver
```

Deliver STAG Release to Firebase App Distribution

### android dev_build_and_deliver

```sh
[bundle exec] fastlane android dev_build_and_deliver
```

Deliver DEV Release to Firebase App Distribution

### android env_build_and_deliver

```sh
[bundle exec] fastlane android env_build_and_deliver
```

Deliver ENV Release to Firebase App Distribution

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
