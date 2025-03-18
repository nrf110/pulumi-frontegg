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

__all__ = ['ProviderArgs', 'Provider']

@pulumi.input_type
class ProviderArgs:
    def __init__(__self__, *,
                 client_id: pulumi.Input[str],
                 secret_key: pulumi.Input[str],
                 api_base_url: Optional[pulumi.Input[str]] = None,
                 environment_id: Optional[pulumi.Input[str]] = None,
                 portal_base_url: Optional[pulumi.Input[str]] = None):
        """
        The set of arguments for constructing a Provider resource.
        :param pulumi.Input[str] client_id: The client ID for a Frontegg portal API key.
        :param pulumi.Input[str] secret_key: The corresponding secret key for the API key.
        :param pulumi.Input[str] api_base_url: The Frontegg api url. Override to change region. Defaults to EU url.
        :param pulumi.Input[str] environment_id: The client ID from environment settings.
        :param pulumi.Input[str] portal_base_url: The Frontegg portal url. Override to change region. Defaults to EU url.
        """
        pulumi.set(__self__, "client_id", client_id)
        pulumi.set(__self__, "secret_key", secret_key)
        if api_base_url is not None:
            pulumi.set(__self__, "api_base_url", api_base_url)
        if environment_id is not None:
            pulumi.set(__self__, "environment_id", environment_id)
        if portal_base_url is not None:
            pulumi.set(__self__, "portal_base_url", portal_base_url)

    @property
    @pulumi.getter(name="clientId")
    def client_id(self) -> pulumi.Input[str]:
        """
        The client ID for a Frontegg portal API key.
        """
        return pulumi.get(self, "client_id")

    @client_id.setter
    def client_id(self, value: pulumi.Input[str]):
        pulumi.set(self, "client_id", value)

    @property
    @pulumi.getter(name="secretKey")
    def secret_key(self) -> pulumi.Input[str]:
        """
        The corresponding secret key for the API key.
        """
        return pulumi.get(self, "secret_key")

    @secret_key.setter
    def secret_key(self, value: pulumi.Input[str]):
        pulumi.set(self, "secret_key", value)

    @property
    @pulumi.getter(name="apiBaseUrl")
    def api_base_url(self) -> Optional[pulumi.Input[str]]:
        """
        The Frontegg api url. Override to change region. Defaults to EU url.
        """
        return pulumi.get(self, "api_base_url")

    @api_base_url.setter
    def api_base_url(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "api_base_url", value)

    @property
    @pulumi.getter(name="environmentId")
    def environment_id(self) -> Optional[pulumi.Input[str]]:
        """
        The client ID from environment settings.
        """
        return pulumi.get(self, "environment_id")

    @environment_id.setter
    def environment_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "environment_id", value)

    @property
    @pulumi.getter(name="portalBaseUrl")
    def portal_base_url(self) -> Optional[pulumi.Input[str]]:
        """
        The Frontegg portal url. Override to change region. Defaults to EU url.
        """
        return pulumi.get(self, "portal_base_url")

    @portal_base_url.setter
    def portal_base_url(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "portal_base_url", value)


class Provider(pulumi.ProviderResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 api_base_url: Optional[pulumi.Input[str]] = None,
                 client_id: Optional[pulumi.Input[str]] = None,
                 environment_id: Optional[pulumi.Input[str]] = None,
                 portal_base_url: Optional[pulumi.Input[str]] = None,
                 secret_key: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        """
        The provider type for the frontegg package. By default, resources use package-wide configuration
        settings, however an explicit `Provider` instance may be created and passed during resource
        construction to achieve fine-grained programmatic control over provider settings. See the
        [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] api_base_url: The Frontegg api url. Override to change region. Defaults to EU url.
        :param pulumi.Input[str] client_id: The client ID for a Frontegg portal API key.
        :param pulumi.Input[str] environment_id: The client ID from environment settings.
        :param pulumi.Input[str] portal_base_url: The Frontegg portal url. Override to change region. Defaults to EU url.
        :param pulumi.Input[str] secret_key: The corresponding secret key for the API key.
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: ProviderArgs,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        The provider type for the frontegg package. By default, resources use package-wide configuration
        settings, however an explicit `Provider` instance may be created and passed during resource
        construction to achieve fine-grained programmatic control over provider settings. See the
        [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.

        :param str resource_name: The name of the resource.
        :param ProviderArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(ProviderArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 api_base_url: Optional[pulumi.Input[str]] = None,
                 client_id: Optional[pulumi.Input[str]] = None,
                 environment_id: Optional[pulumi.Input[str]] = None,
                 portal_base_url: Optional[pulumi.Input[str]] = None,
                 secret_key: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        opts = pulumi.ResourceOptions.merge(_utilities.get_resource_opts_defaults(), opts)
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = ProviderArgs.__new__(ProviderArgs)

            __props__.__dict__["api_base_url"] = api_base_url
            if client_id is None and not opts.urn:
                raise TypeError("Missing required property 'client_id'")
            __props__.__dict__["client_id"] = client_id
            __props__.__dict__["environment_id"] = None if environment_id is None else pulumi.Output.secret(environment_id)
            __props__.__dict__["portal_base_url"] = portal_base_url
            if secret_key is None and not opts.urn:
                raise TypeError("Missing required property 'secret_key'")
            __props__.__dict__["secret_key"] = None if secret_key is None else pulumi.Output.secret(secret_key)
        secret_opts = pulumi.ResourceOptions(additional_secret_outputs=["environmentId", "secretKey"])
        opts = pulumi.ResourceOptions.merge(opts, secret_opts)
        super(Provider, __self__).__init__(
            'frontegg',
            resource_name,
            __props__,
            opts)

    @property
    @pulumi.getter(name="apiBaseUrl")
    def api_base_url(self) -> pulumi.Output[Optional[str]]:
        """
        The Frontegg api url. Override to change region. Defaults to EU url.
        """
        return pulumi.get(self, "api_base_url")

    @property
    @pulumi.getter(name="clientId")
    def client_id(self) -> pulumi.Output[str]:
        """
        The client ID for a Frontegg portal API key.
        """
        return pulumi.get(self, "client_id")

    @property
    @pulumi.getter(name="environmentId")
    def environment_id(self) -> pulumi.Output[Optional[str]]:
        """
        The client ID from environment settings.
        """
        return pulumi.get(self, "environment_id")

    @property
    @pulumi.getter(name="portalBaseUrl")
    def portal_base_url(self) -> pulumi.Output[Optional[str]]:
        """
        The Frontegg portal url. Override to change region. Defaults to EU url.
        """
        return pulumi.get(self, "portal_base_url")

    @property
    @pulumi.getter(name="secretKey")
    def secret_key(self) -> pulumi.Output[str]:
        """
        The corresponding secret key for the API key.
        """
        return pulumi.get(self, "secret_key")

