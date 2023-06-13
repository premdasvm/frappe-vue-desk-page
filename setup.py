from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in na_2/__init__.py
from na_2 import __version__ as version

setup(
	name="na_2",
	version=version,
	description="Test app 2",
	author="prem",
	author_email="prem@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
