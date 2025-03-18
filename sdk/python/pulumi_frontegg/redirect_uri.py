# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import sys
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
if sys.version_info >= (3, 11):
    from typing import NotRequired, TypedDict, TypeAlias
else:
    from typing_extensions import NotRequired, TypedDict, TypeAlias
from . import _utilities

__all__ = ['RedirectUriArgs', 'RedirectUri']

@pulumi.input_type
class RedirectUriArgs:
    def __init__(__self__, *,
                 redirect_uri: pulumi.Input[str]):
        """
        The set of arguments for constructing a RedirectUri resource.
        :param pulumi.Input[str] redirect_uri: The redirect URI.
        """
        pulumi.set(__self__, "redirect_uri", redirect_uri)

    @property
    @pulumi.getter(name="redirectUri")
    def redirect_uri(self) -> pulumi.Input[str]:
        """
        The redirect URI.
        """
        return pulumi.get(self, "redirect_uri")

    @redirect_uri.setter
    def redirect_uri(self, value: pulumi.Input[str]):
        pulumi.set(self, "redirect_uri", value)


@pulumi.input_type
class _RedirectUriState:
    def __init__(__self__, *,
                 key: Optional[pulumi.Input[str]] = None,
                 redirect_uri: Optional[pulumi.Input[str]] = None):
        """
        Input properties used for looking up and filtering RedirectUri resources.
        :param pulumi.Input[str] key: The redirect URI key.
        :param pulumi.Input[str] redirect_uri: The redirect URI.
        """
        if key is not None:
            pulumi.set(__self__, "key", key)
        if redirect_uri is not None:
            pulumi.set(__self__, "redirect_uri", redirect_uri)

    @property
    @pulumi.getter
    def key(self) -> Optional[pulumi.Input[str]]:
        """
        The redirect URI key.
        """
        return pulumi.get(self, "key")

    @key.setter
    def key(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "key", value)

    @property
    @pulumi.getter(name="redirectUri")
    def redirect_uri(self) -> Optional[pulumi.Input[str]]:
        """
        The redirect URI.
        """
        return pulumi.get(self, "redirect_uri")

    @redirect_uri.setter
    def redirect_uri(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "redirect_uri", value)


class RedirectUri(pulumi.CustomResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 redirect_uri: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        """
        Configures a Frontegg Redirect URI.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] redirect_uri: The redirect URI.
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: RedirectUriArgs,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        Configures a Frontegg Redirect URI.

        :param str resource_name: The name of the resource.
        :param RedirectUriArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(RedirectUriArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 redirect_uri: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        opts = pulumi.ResourceOptions.merge(_utilities.get_resource_opts_defaults(), opts)
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = RedirectUriArgs.__new__(RedirectUriArgs)

            if redirect_uri is None and not opts.urn:
                raise TypeError("Missing required property 'redirect_uri'")
            __props__.__dict__["redirect_uri"] = redirect_uri
            __props__.__dict__["key"] = None
        super(RedirectUri, __self__).__init__(
            'frontegg:index/redirectUri:RedirectUri',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            key: Optional[pulumi.Input[str]] = None,
            redirect_uri: Optional[pulumi.Input[str]] = None) -> 'RedirectUri':
        """
        Get an existing RedirectUri resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] key: The redirect URI key.
        :param pulumi.Input[str] redirect_uri: The redirect URI.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = _RedirectUriState.__new__(_RedirectUriState)

        __props__.__dict__["key"] = key
        __props__.__dict__["redirect_uri"] = redirect_uri
        return RedirectUri(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def key(self) -> pulumi.Output[str]:
        """
        The redirect URI key.
        """
        return pulumi.get(self, "key")

    @property
    @pulumi.getter(name="redirectUri")
    def redirect_uri(self) -> pulumi.Output[str]:
        """
        The redirect URI.
        """
        return pulumi.get(self, "redirect_uri")

